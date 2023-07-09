export const formatEmail = (email) => {
    return email.replace(/[.@]/g, '-');
};

export function formatTimeStamp(timeStamp) {
    const formattedDate = new Date(timeStamp).toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
    return formattedDate;
  }