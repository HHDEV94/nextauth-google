# NextAuth mini project

## Getting Started

Run the following commands:

1. `npm install`
2. `npm run dev`
3. Click on `http://localhost:3000` to open your browser to see the result.

This project uses google authentication. You must create a `.env.local` file and provide the next data:

1. GOOGLE_CLIENT_ID
2. GOOGLE_CLIENT_SECRET
3. NEXTAUTH_URL
4. NEXTAUTH_SECRET

You can click in the following url to get the [google credentials](https://console.developers.google.com/apis/credentials).

`NEXTAUTH_URL` you can use `http://localhost:3000` in development.

To get the `NEXTAUTH_SECRET` you can run the following command in your terminal `openssl rand -base64 32` or [https://generate-secret.vercel.app/32](https://generate-secret.vercel.app/32).
