# nestcli-bug-in-watch-mode

## Reproduce
1. pnpm v7 and node v16
2. run `pnpm i`
3. run `pnpm nest build -w` will be fail (which should not be)
4. but run `pnpm nest build` will be success