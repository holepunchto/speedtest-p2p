# speedtest-p2p

Pear TUI app for testing peer-to-peer network speeds, powered by [Hyperswarm](https://github.com/holepunchto/hyperswarm) and [Bare](https://github.com/holepunchto/bare).

<img width="799" height="412" alt="image" src="https://github.com/user-attachments/assets/ef6ec733-fbc8-4286-bc1d-fcdd60aca3e7" />

## ⚗️ Pear Labs - experimental

> [!WARNING]
> Pear Labs projects are built by members of the Pear and Platform team, often outside of regular feature work, to explore ideas and show what's possible on the platform. They have been given a light review and are considered trustworthy to install and run, but they do not carry the guarantees of our first-class software.
There is no commitment to maintenance, backwards compatibility, security response times, or long-term availability, and they should not be relied on for anything critical. Use them to learn, test, and have fun - and please send feedback, but treat them as experiments rather than products.

## P2P Architecture

There is no central speed-test server. Every `speedtest-p2p` instance joins the same 32-byte Hyperswarm topic as both a client and a server. The DHT handles discovery and NAT hole punching, then peers exchange test traffic among all online peers at the same time in order to saturate your bandwidth and determine the maximum download/upload limits of your Internet connection.

## Usage

Peers join the public lobby by default.

```console
$ speedtest-p2p
```

## Private lobbies

```console
$ speedtest-p2p --lobby "any secret"
```

The lobby name is hashed with a namespace prefix to become a 32-byte Hyperswarm topic.

## Development

Install [Bare](https://github.com/holepunchto/bare) JS runtime and dependencies:

```console
npm i -g bare
npm ci
```

Run:

```sh
bare index.js
```

## CLI Options

| Option                 | Description                            |
| ---------------------- | -------------------------------------- |
| `--lobby <name>`       | Join a private lobby                   |
| `--relay <public-key>` | Use a blind relay for peer connections |
| `--version`, `-v`      | Show the version                       |
| `--help`, `-h`         | Show help                              |

## Tests

```sh
npm run lint
npm test
```

## Stack

- [`hyperswarm`](https://github.com/holepunchto/hyperswarm): peer discovery and encrypted connections.
- [`bare-tui`](https://github.com/holepunchto/bare-tui): terminal interface (TUI).
- [`paparam`](https://github.com/holepunchto/paparam): CLI argument parsing.

## Standalone builds

```sh
npm run make
```

Standalone builds are written to `out/<platform>-<arch>/speedtest-p2p`.

## Supported platforms

| Platform | x86_64 | arm64 |
| -------- | ------ | ----- |
| Linux    | ✔️     | ✔️    |
| macOS    | ✔️     | ✔️    |
| Windows  | ✔️     | ✔️    |

## Blind relay

On networks where direct P2P connections are restricted, use [pear](https://github.com/holepunchto/pear) to start a blind-relay server on another network (`$ pear blind-relay`), then run a speedtest-p2p client thru that network:

```console
$ speedtest-p2p --relay <public-key>
```

## License

Apache-2.0
