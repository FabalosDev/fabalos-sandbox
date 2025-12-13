<script lang="ts">
	const projects = [
		{
			name: 'Biohack Dashboard',
			url: 'https://bioboard.fabalos.com',
			desc: 'Automation lab for Biohack story engine, scraping, enrichment & workflow tools.'
		},
		{
			name: 'Fabalos Automation Site',
			url: 'https://fabalos.com',
			desc: 'Your public-facing automation consultancy and brand HQ.'
		},
		{
			name: 'Fabalos Sandbox',
			url: 'https://fabaverse.net/sandbox', // or adjust if local
			desc: 'Internal dev lab for experiments, prototypes, and tools.'
		},
		{
			name: 'Fabaverse',
			url: 'https://fabaverse.net',
			desc: 'Lore world, blog engine, and creative universe.'
		},
		{
			name: 'FloFlux (Prototype)',
			url: 'floflux.com',
			desc: 'Reserved space for your future product engine / CMS / automation suite.'
		},
		{
			name: 'GitHub – FabalosDev',
			url: 'https://github.com/FabalosDev',
			desc: 'All automation repos, n8n workflows, and backend tools.'
		},
		{
			name: 'GitHub – Fabaverse',
			url: 'https://github.com/Fabaverse',
			desc: 'Public-facing websites, blog engine, and UI systems.'
		},
		{
			name: 'Echo by Fabalos',
			url: 'https://fabaverse.net/echo',
			desc: 'My Notion Echo Space for public view.'
		},
		{
			name: 'Fabaverse Live',
			url: 'https://fabaverse.live',
			desc: 'My Public Linktree-style hub for all things Fabaverse.'
		}
	];

	const codenames = [
		{ letter: 'A', name: 'AetherCore', desc: 'Primary energy system / auth layer' },
		{ letter: 'B', name: 'BioSync', desc: 'Biohack Yourself integration' },
		{ letter: 'C', name: 'CortexOps', desc: 'Automation control & ops monitoring' },
		{ letter: 'D', name: 'DriftLab', desc: 'Experimental content flows' },
		{ letter: 'E', name: 'EchoThread', desc: 'Webhooks, data listeners, feed sync' },
		{ letter: 'F', name: 'FoxLink', desc: 'Networking, tracking, internal tools' },
		{ letter: 'G', name: 'GlyphVault', desc: 'Icons, visual assets, symbols' },
		{ letter: 'H', name: 'HelixPulse', desc: 'Health pipelines / vitality data' },
		{ letter: 'I', name: 'IrisGate', desc: 'Security, session handling, auth ops' },
		{ letter: 'J', name: 'JetFrame', desc: 'UI components & layout system' },
		{ letter: 'K', name: 'KernelSpin', desc: 'Schedulers, background tasks' },
		{ letter: 'L', name: 'LumenNest', desc: 'Light-theme / aesthetic layer' },
		{ letter: 'M', name: 'MetaStream', desc: 'SEO/meta/tagging engines' },
		{ letter: 'N', name: 'NovaFlux', desc: 'Real-time feed & stream systems' },
		{ letter: 'O', name: 'OrionDock', desc: 'Environments & deployments' },
		{ letter: 'P', name: 'PulseGrid', desc: 'Dashboard UI & analytics layer' },
		{ letter: 'Q', name: 'QuartzNet', desc: 'Rate-limits, quotas, rule engine' },
		{ letter: 'R', name: 'RadixCore', desc: 'Radix UI base integration' },
		{ letter: 'S', name: 'Synaptix', desc: 'AI/GPT workflow modules' },
		{ letter: 'T', name: 'Tesseract', desc: 'Data structure / storage systems' },
		{ letter: 'U', name: 'Ultravox', desc: 'Notifications, alerts, toasts' },
		{ letter: 'V', name: 'VitaForge', desc: 'Bio-gen & transformation pipelines' },
		{ letter: 'W', name: 'WardenEye', desc: 'Logs, audits, observability' },
		{ letter: 'X', name: 'Xenovault', desc: 'Secret lab zone / dev-only area' },
		{ letter: 'Y', name: 'YieldCore', desc: 'Productivity, habits, routines' },
		{ letter: 'Z', name: 'ZenithLoop', desc: 'Finalized automations' }
	];
</script>

<h1 class="mb-4 text-2xl font-bold">FoxOps: Main Dashboard</h1>
<p class="mb-6 text-gray-400">
	Welcome to your Ops Base. All active projects and systems live here.
</p>
<section class="mx-auto grid max-w-6xl grid-cols-1 items-start gap-12 md:grid-cols-2">
	<!-- LEFT COLUMN -->
	<div>
		<h2 class="mb-4 text-xl font-bold text-blue-300">🧩 FoxOps Codename Index</h2>

		<div class="space-y-2">
			{#each codenames as c}
				<div class="flex items-start gap-4">
					<span class="w-6 font-bold text-blue-400">{c.letter}:</span>
					<div>
						<span class="font-semibold text-blue-300">{c.name}</span>
						<div class="text-sm text-gray-400">{c.desc}</div>
					</div>
				</div>
			{/each}
		</div>
	</div>

	<!-- RIGHT COLUMN -->
	<div>
		<ul class="space-y-5">
			{#each projects as p}
				<li class="group">
					<a
						href={p.url}
						target="_blank"
						rel="noopener noreferrer"
						class="font-semibold text-blue-400 underline group-hover:text-blue-300"
					>
						{p.name}
					</a>
					<p class="ml-2 text-sm text-gray-500">{p.desc}</p>
				</li>
			{/each}
		</ul>
	</div>
</section>
