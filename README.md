==== Pen is a wrapper around contentEditable ====

Pen is designed to be fast lightweight and extensible and is modeled loosely after the guardian scribe project.

== Why a new project? ==

Scribe while brillient in it's conception failes in some astonishing ways.

- it forgets it's selection when it looses focus.
- it doesn't call sanitize on every change event, only when critical things happen.