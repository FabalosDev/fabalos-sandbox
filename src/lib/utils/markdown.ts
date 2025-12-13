import { marked } from 'marked';
import sanitizeHtml from 'sanitize-html';

// Custom renderer (optional expansion later)
const renderer = new marked.Renderer();

// Add anchor links to headings
renderer.heading = (text, level) => {
	const id = text.toLowerCase().replace(/[^\w]+/g, '-');
	return `<h${level} id="${id}" class="group">
            <a href="#${id}" class="opacity-0 group-hover:opacity-100 text-blue-400 mr-2">#</a>
            ${text}
          </h${level}>`;
};

marked.setOptions({
	renderer,
	breaks: true,
	gfm: true
});

export function renderMarkdown(md: string) {
	const html = marked.parse(md || '');
	return sanitizeHtml(html, {
		allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img', 'h1', 'h2', 'h3', 'h4']),
		allowedAttributes: {
			'*': ['id', 'href', 'class'],
			img: ['src', 'alt', 'loading']
		}
	});
}
