import { useRef, useEffect } from 'react';

function useIsMobile() {
  const ref = useRef();
  useEffect(() => {
    ref.current = window.matchMedia("(max-width: 700px)").matches
  });
  return ref.current;
}

export default useIsMobile;
