export const formatEmail = (email) => {
  return email.replace(/[.@]/g, "-");
};


export function formatTimeStamp(timeStamp) {
  const formattedDate = new Date(timeStamp).toLocaleString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  return formattedDate;
}
