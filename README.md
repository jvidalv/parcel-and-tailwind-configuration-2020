## Parcel 1 or 2 and Tailwind 2 setup with Preact and TypeScript
As almost 2021, most of current tutorials and guides on the internet of how to set up this combination are outdated. More so considering the latest iterations of Tailwind and Parcel that bumps the PostCSS version in use.

**PostCSS**

``
Error: PostCSS plugin tailwindcss requires PostCSS 8.
``

Most of times the solution is to install the bridge to be able to use Tailwind with older version of PostCSS:
https://tailwindcss.com/docs/installation#post-css-7-compatibility-build

This solution works great for bot Parcel 1 and Parcel 2 (That at the moment of writing this is still in beta).

**Second problem, double dot annotation in .pcss files**

 