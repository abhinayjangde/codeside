

(1*)

If you get this error while starting docker container.

```bash
/judge0.conf: line 317: $'\r': command not found
```
__solution__

> Using VS Code (Windows)

1. Open judge0.conf in VS Code.

2. Look at the bottom-right corner; if it shows CRLF, click on it.

3. Select LF from the options.

4. Save the file (Ctrl + S).
