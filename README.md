# Next.js Dynamic Routes Error: Cannot read properties of undefined (reading 'id')

This repository demonstrates a common error encountered when working with dynamic routes in Next.js. The error, "Cannot read properties of undefined (reading 'id')", arises when trying to access route parameters (params) within a component that doesn't utilize `getServerSideProps` or `getStaticProps`.

## Problem
The `about.js` file attempts to use route parameters within a standard functional component. This is incorrect because route parameters are only accessible in components that use data fetching methods like `getServerSideProps` or `getStaticProps`.

## Solution
The issue is resolved by either:
1. Removing the usage of `params` in a component not using data fetching methods or
2. Using `getServerSideProps` or `getStaticProps`  to fetch data and make `params` available to the component

This example focuses on the first solution by removing the incorrect usage of params.