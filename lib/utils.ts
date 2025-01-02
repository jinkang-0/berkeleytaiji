export const getMonth = (date: Date) => {
  return date.toLocaleDateString("en", { month: "short" });
};

export const getTime = (date: Date) => {
  return date.toLocaleTimeString("en", {
    hour: "numeric",
    minute: "2-digit"
  });
};
