# TODO 


## Core Stack
- Sveltekit
- Supabase
- OpenAI 

## Core Project Features 
- UI
  - Header
    - [ ] User Avatar
    - [ ] View Favorited Button
    - [ ] Show Logo

  - Home Page
    - [ ] Input
    - [ ] Image Placeholder
    - [ ] Button to save image to user supabase storage bucket

  - Favorites Page
    - [ ] Scrollable view of all favorited images
    - [ ] Remove from favorites button.
- Backend
  - Tables
    - [ ] Users table.
    - [ ] Favorites table ( some way to show relationship between user and liked images)
    - [ ] Storage Buckets for images
  - Open AI API
    - [X] Query DALL-E to generate image from client prompt
    - [ ] Store image in supabase bucket
    - [X] send base64 img to client
  - OAuth
    - [ ] Supabase auth-helpers-svelte setup
    - [ ] Google Console Client ID / Key.
    - [ ] Supabase OAuth Redirect config.
    - [ ] Auth check on global +Layout.server.ts ( to automatically redirect any unauthorized users)
    - [ ] Create a bucket on user creation, liked to that user via foreign key.
  
## Resources 

- OpenAI
  - https://platform.openai.com/docs/guides/images/language-specific-tips?context=node

- Supabase
  - Client docs -> https://supabase.com/docs/reference/javascript/introduction
  - Auth docs -> https://supabase.com/docs/guides/auth/auth-helpers/sveltekit
  - Database docs -> https://supabase.com/docs/guides/database/overview