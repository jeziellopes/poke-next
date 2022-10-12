export const getEnv = (key: string): string => {
  const env = {
    API_URL: process.env.NEXT_PUBLIC_API_URL,
    POKE_API_URL: process.env.NEXT_PUBLIC_POKE_API_URL,
  }

  return env[key]
}
