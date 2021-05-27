# Beginning - an overview of Web works (based on MDN)

This page is all about the **INVISIBLE TECHNOLOGY** of Web

## Client and Server

- Clients: Your PC/Phone or Applications or Web Browsers which connects to internet.

- Servers: Computers that stores webpages, sites, or apps. Webpages will be downloaded onto clients for display.

## Process before a webpage actually display

1.  DNS - Domain Name Server (Find IP Address)

    The browser goes to the DNS Server, find the server address which runs the website.

2.  TCP/IP - Transmission Control Protocol/Internet Protocol (Establish Connection)

    TCP/IP is a 5 layer model.

    - Physical - (data in binary, 010001...) - (Hubs, Cables, Repeaters)

    - Data Link - (Frame Header - Frame Data) - (Bridges, Modem, Network Interface Card)

    - Internet - (IP header - IP Data) - (Routers, Bidge Routers)

    - Transport - (UDP header - UDP data, User Datagram Protocol) - (Gateways, Firewall)

    - Application - (Data) - (PC, Phone, Server, with application running)

    TCP/IP is **full duplex** protocol, "meaning that each TCP connection supports a pair of byte streams, one flowing in each direction."

    So with the idea of full duplex, let's learn the three handshakes (establish connection) and the four handshakes(end connection).

    - Three Handshakes (Establish Full Duplex Connection)

      1.  Client -> Server

          Server get:

          | Client      | Server         |
          | ----------- | -------------- |
          | send normal | recieve normal |

      2.  Server -> Client

          Client get:

          | Client                | Server                |
          | --------------------- | --------------------- |
          | send & recieve normal | send & recieve normal |

          Client confirms both side ready.

          Server can't confirm client recieve normal.

      3.  Client -> Server

          Server get:

          | Client                |
          | --------------------- |
          | send & recieve normal |

          Server confirms both side ready. A full duplex connection is established.

    - Four Handshakes (End Full Duplex Connection)

      1.  Client -> Server

          Server get:

          | Client                    |
          | ------------------------- |
          | request to end connection |

          Status:

          | Client     | Server |
          | ---------- | ------ |
          | FIN_WAIT_1 |        |

      2.  Server -> Client

          Client get:

          | Server                                       |
          | -------------------------------------------- |
          | prepare to end connection, waiting for close |

          Status:

          | Client     | Server     |
          | ---------- | ---------- |
          | FIN_WAIT_2 | CLOSE_WAIT |

      3.  Server -> Client

          ```
          if (server has leftover data) {
            send data to client;
          }
          send end message(FIN) to client;
          ```

          Client get:

          | Server                                                          |
          | --------------------------------------------------------------- |
          | ready to end connection, final check for client's close confirm |

          Status:

          | Client | Server   |
          | ------ | -------- |
          |        | LAST_ACK |

      4.  Client -> Server

          Server get:

          | Client                                      |
          | ------------------------------------------- |
          | confirm to end connection, waiting to close |

          Status:

          | Client    | Server |
          | --------- | ------ |
          | TIME_WAIT | CLOSE  |

          ```
          if (no response after 2MSL(maximum segment lifetime)) {
            client close connection
          }
          ```

    After connected the browser sends an HTTP(s) request to the server, asking a copy of the website from the server.

3.  Rendering (Display Website)

    - Process HTML markup and build the DOM tree.
    - Process CSS markup and build the CSSOM tree.
    - Combine the DOM and CSSOM into a render tree.
    - Run layout on the render tree to compute geometry of each node.
    - Paint the individual nodes to the screen.

    "Reflow is the name of the browser for re-calculating the positions and geometries of elements in the document, for the purpose of re-rendering part or all of the document."

    Repaint is the name of the browser for changing the appearance of a node without interfere the layout of the whole page.

    So a reflow will cause repaint, a repaint probably won't cause a reflow.

    Reflow is so expensive because of it has to re-render.

    Repaint is also a expensive process, because it forces browser to verify the visibility of all the other DOM nodes.

    A nice way to reduce reflow and repaint is to use virtual DOM. Why? Because virtual DOM is stored in memory, and it can use diffing algorithm to figure out what has changed without causing reflow or repaint.
