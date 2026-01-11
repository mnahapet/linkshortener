# Authentication

## Overview

All authentication in this application is handled exclusively by **Clerk**. Do not implement or use any other authentication methods.

## Key Rules

### 1. Authentication Provider
- **ONLY use Clerk** for authentication
- No custom auth implementations
- No alternative auth providers (Auth.js, NextAuth, Supabase Auth, etc.)

### 2. Protected Routes
- `/dashboard` is a protected route
- Users MUST be logged in to access `/dashboard`
- Use Clerk's middleware or route protection to enforce this

### 3. Homepage Redirect Logic
- If a logged-in user visits the homepage (`/`), redirect them to `/dashboard`
- Only show the homepage to unauthenticated users

### 4. Sign In/Sign Up Modal Behavior
- Sign in and sign up flows must launch as **modals**
- Do not use separate pages for authentication flows
- Configure Clerk components to open in modal mode

## Implementation Guidelines

### Clerk Components
Use Clerk's built-in components:
- `<SignIn />` - configured to display as modal
- `<SignUp />` - configured to display as modal
- `<UserButton />` - for authenticated user actions

### Route Protection
Use Clerk's Next.js middleware to protect routes:
- Configure middleware to protect `/dashboard` and related routes
- Implement redirect logic for authenticated users on homepage

### Authentication State
- Use Clerk hooks (`useUser()`, `useAuth()`) to check authentication state
- Access user data through Clerk's provided methods
- Never store auth tokens manually

## What NOT to Do

❌ Do not implement custom JWT handling  
❌ Do not use session storage for auth  
❌ Do not create custom login/signup forms outside of Clerk  
❌ Do not use any auth library other than Clerk  
❌ Do not create separate sign-in/sign-up pages (use modals)
