export const formatTimeAsArray = (time) => {
  if (time == null || time < 0)
    return ["0", "0", ":", "0", "0", ".", "0", "0", "0"];

  const minutes = Math.floor(time / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
  const milliseconds = time % 1000;

  const formattedTime =
    `${minutes < 10 ? `0${minutes}` : minutes}:` +
    `${seconds < 10 ? `0${seconds}` : seconds}.` +
    `${milliseconds.toString().padStart(3, "0")}`;

  return formattedTime.split("");
};
export const generateFakeBets = () => {
  const fakeUsers = [
    "us***it",
    "he***tm",
    "fh***fk",
    "ne***ik",
    "de***r8",
    "dl***74",
    "hd***d7",
    "hu***44",
    "ur**65",
    "dn***ur",
  ];

  const betCount = Math.floor(Math.random() * 71) + 30; // Generate 30-100 fake bets

  return Array.from({ length: betCount }, () => ({
    userName: fakeUsers[Math.floor(Math.random() * fakeUsers.length)],
    betAmount: Math.floor(Math.random() * 100) + 10, // Random bet from 10 to 110
    chip: Math.floor(Math.random() * 3), // Random chip (0,1,2)
    isFake: true,
  }));
};

export function formatBalance(amount) {
  if (amount === undefined || amount === null) return "";
  return new Intl.NumberFormat("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}
