import { useState, useCallback } from "react";

const useBars = () => {
  const [bars, setBars] = useState<boolean>(false);
  const toggleBars = useCallback(() => setBars(!bars), [bars]);
  return { bars, toggleBars };
}


export default useBars;
