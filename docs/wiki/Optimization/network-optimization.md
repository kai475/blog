# Network Optimization

## Use Minimum HTTP Request

Combine small files into a large file to reduce the times of creating a TCP connection.

## Use HTTP/2

- Parsing timing optimized - HTTP/2 requests based on frame, every frame has its own length. (HTTP parsing ends at CRLF)
- One TCP connection handles multiple http requests - use stream and streamID to pair a HTTP request and responses.
- Compress HTTP request header - build a "Header Form" to store info blocks, client only send the diffrent block of each request header, rebuild header in server.
- Priority
- Flow control (network speed control)
- Push responses - server pushes extra resources without another client request.

## Use Gzip

## Use CDN

GSLB(Global Server Load Balancing) use local DNS to find a nearest SLB which then the client sends HTTP request to.

SLB returns suitable cache node(content-server) IP tells the client to redirect.

Cache node response content resources if requested resources are not existed or expired, else cache node will update resources from origin server.

## Use Cache

- Expires and Cache-Control and max-age

## Use SSR(Server-Side-Render)

SSR websites puts resources files into HTML index files, when clients recieve copys of HTML files it starts both rendering and loading resources, which reduces time-to-content.
