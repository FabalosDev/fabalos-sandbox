# 🧾 Changelog

All notable changes to **Fabalos Sandbox** are documented here.

This project intentionally allows breaking changes during early versions.

---

## [0.3.0] – 2025-12-13

### Added
- Case Study system (list, view, new, edit)
- Blog system (new + edit parity)
- Supabase-backed CRUD for content
- JSON-based sections architecture
- Secure dashboard routes

### Fixed
- Form submission inconsistencies
- Supabase schema mismatches
- Action handling issues in SvelteKit
- Data loss during edit flows
- SSR and POST action errors

### Changed
- UI flows aligned between `new` and `edit`
- Case Study schema adjusted to real usage
- Removed premature abstractions

---

## [0.2.0] – Iteration Phase

### Added
- Dashboard layout
- Auth-protected routes
- Initial content models

### Changed
- Multiple refactors to schema and UI
- Removed unused components and assets

---

## [0.1.0] – Sandbox Initialized

### Added
- Base SvelteKit project
- Tailwind v4 CSS architecture
- Supabase integration
- Initial routing structure

---

## 🔎 Versioning Strategy

This project follows **loose semantic versioning**:

- `0.x.x` — Experimental, breaking changes allowed
- `1.0.0` — Reserved for when a stable extractable system emerges

No rush to `1.0.0`.
