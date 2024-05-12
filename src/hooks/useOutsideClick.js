import { useEffect, useRef } from "react";

function useOutsideClick(close, listeningCapturing = true) {
  const ref = useRef();
  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        close();
      }
    }
    document.addEventListener("click", handleClick, listeningCapturing);

    return () => {
      document.removeEventListener("click", handleClick, listeningCapturing);
    };
  }, [close, listeningCapturing]);
  return ref;
}

export default useOutsideClick;
