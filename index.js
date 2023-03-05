#!/usr/bin/env node

const codes = {
  100: "Continue",
  101: "Switching Protocols",
  102: "Processing",
  200: "OK",
  201: "Created",
  202: "Accepted",
  203: "Non-Authoritative Information",
  204: "No Content",
  205: "Reset Content",
  206: "Partial Content",
  207: "Multi-Status",
  208: "Already Reported",
  226: "IM Used",
  300: "Multiple Choices",
  301: "Moved Permanently",
  302: "Found",
  303: "See Other",
  304: "Not Modified",
  305: "Use Proxy",
  307: "Temporary Redirect",
  308: "Permanent Redirect",
  400: "Bad Request",
  401: "Unauthorized",
  402: "Payment Required",
  403: "Forbidden",
  404: "Not Found",
  405: "Method Not Allowed",
  406: "Not Acceptable",
  407: "Proxy Authentication Required",
  408: "Request Timeout",
  409: "Conflict",
  410: "Gone",
  411: "Length Required",
  412: "Precondition Failed",
  413: "Payload Too Large",
  414: "URI Too Long",
  415: "Unsupported Media Type",
  416: "Range Not Satisfiable",
  417: "Expectation Failed",
  418: "I'm a teapot",
  421: "Misdirected Request",
  422: "Unprocessable Entity",
  423: "Locked",
  424: "Failed Dependency",
  425: "Unordered Collection",
  426: "Upgrade Required",
  428: "Precondition Required",
  429: "Too Many Requests",
  431: "Request Header Fields Too Large",
  451: "Unavailable For Legal Reasons",
  500: "Internal Server Error",
  501: "Not Implemented",
  502: "Bad Gateway",
  503: "Service Unavailable",
  504: "Gateway Timeout",
  505: "HTTP Version Not Supported",
  506: "Variant Also Negotiates",
  507: "Insufficient Storage",
  508: "Loop Detected",
  509: "Bandwidth Limit Exceeded",
  510: "Not Extended",
  511: "Network Authentication Required",
};
let coder_headers = {
  "1xx": "Informational",
  "2xx": "Success",
  "3xx": "Redirection",
  "4xx": "Client error",
  "5xx": "Server error",
};

let table_data = [coder_headers];

let table_styles = {
  "1xx": "color: blue",
  "2xx": "color: green",
  "3xx": "color: orange",
  "4xx": "color: red",
  "5xx": "color: purple",
};

console.table(table_data, ["1xx", "2xx", "3xx", "4xx", "5xx"], table_styles);

function getStatusCode(code) {
  if (codes[code]) {
    console.log("=====================================================");
     console.log(
       `HTTP status code ${code}: \x1b[33m${codes[code]}\x1b[0m`
     );
    console.log("=====================================================");
    return `${code} ${codes[code]}`;
  } else {
    console.log(`Unknown Status Code 🙄`);
    return "Unknown Status Code";
  }
}

const args = process.argv.slice(2);
const code = args[0];

module.exports = getStatusCode(code);
