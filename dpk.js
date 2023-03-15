const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  // Constants
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;

  // Initialize candidate partition key
  let candidate = TRIVIAL_PARTITION_KEY;

  // If event is not null or undefined
  if (event) {
    // If event has a partitionKey property, use it as candidate
    if (event.partitionKey) {
      candidate = event.partitionKey;
    }
    // Otherwise, use SHA3-512 hash of the event data as candidate
    else {
      const data = JSON.stringify(event);
      candidate = crypto.createHash("sha3-512").update(data).digest("hex");
    }
  }

  // Ensure candidate is a string
  if (typeof candidate !== "string") {
    candidate = JSON.stringify(candidate);
  }

  // If candidate is too long, use its hash as candidate
  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = crypto.createHash("sha3-512").update(candidate).digest("hex");
  }

  // Return candidate partition key
  return candidate;
};
