const crypto = require("crypto");
const { MAX_PARTITION_KEY_LENGTH, DEFAULT_PARTITION_KEY } = require("./utils/constants");

exports.deterministicPartitionKey = (event) => {
  let candidate = DEFAULT_PARTITION_KEY;

  if (event) {
    candidate = event.partitionKey || JSON.stringify(event) ;
  }
  if (typeof candidate !== "string") {
    candidate = JSON.stringify(candidate);
  }
  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = crypto.createHash("sha3-512").update(candidate).digest("hex");
  }
  return candidate;
};