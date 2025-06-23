useEffect(() => {
  const timeout = setTimeout(() => {
    console.log("Đã chờ 3 giây");
  }, 3000);

  return () => clearTimeout(timeout);
}, []);
