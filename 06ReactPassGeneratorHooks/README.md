Without useCallback → A new function is created on every render.

With useCallback → The same function reference is reused (unless dependencies change)