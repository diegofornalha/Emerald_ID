import { createContext } from 'react'
import { useContext, useState } from 'react';
import { useEffect } from 'react';

export const DiscordContext = createContext({});

export const useDiscord = () => useContext(DiscordContext);

export default function DiscordProvider({ children }) {
  const [discordUsername, setDiscordUsername] = useState('');
  const [discordId, setDiscordId] = useState();
  
  function logout() {
    localStorage.removeItem('discordInfo');
    localStorage.removeItem('oauthData');
    // Não é necessário chamar checkUpdates aqui
    setDiscordUsername('');
    setDiscordId(null);
  }

  useEffect(() => {
    // Não é necessário chamar checkUpdates aqui
    console.log("Hello")
  }, [])

  const value = {
    discordUsername,
    discordId,
    logout
  }

  return <DiscordContext.Provider value={value}>{children}</DiscordContext.Provider>
}
