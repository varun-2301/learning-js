// --- Validation helpers ---
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
const hasUpper = /[A-Z]/
const hasLower = /[a-z]/
const hasDigit = /\d/
const hasSpecial = /[^A-Za-z0-9]/

function validate(values) {
    const errors = {}

    if (!values.name.trim()) {
        errors.name = "Name is required"
    } else if (values.name.trim().length < 2) {
        errors.name = "Name must be at least 2 characters"
    }

    if (!values.email) {
        errors.email = "Email is required"
    } else if (!emailRe.test(values.email)) {
        errors.email = "Enter a valid email address"
    }

    if (!values.password) {
        errors.password = "Password is required"
    } else {
        const msgs = []
        if (values.password.length < 8) msgs.push("8+ chars")
        if (!hasUpper.test(values.password)) msgs.push("one uppercase")
        if (!hasLower.test(values.password)) msgs.push("one lowercase")
        if (!hasDigit.test(values.password)) msgs.push("one number")
        if (!hasSpecial.test(values.password)) msgs.push("one special")
        if (msgs.length) errors.password = "Needs " + msgs.join(", ")
    }

    if (!values.confirm) {
        errors.confirm = "Confirm your password"
    } else if (values.confirm !== values.password) {
        errors.confirm = "Passwords do not match"
    }

    return errors
}

const FormWithValidation = () =>{
  // Controlled inputs
    const [values, setValues] = React.useState({
        name: "",
        email: "",
        password: "",
        confirm: "",
    })

    // Track touched fields for UX (don’t show errors before interaction)
    const [touched, setTouched] = React.useState({})

    // Real-time errors (recompute when values change)
    const errors = React.useMemo(() => validate(values), [values])
    const isValid = Object.keys(errors).length === 0

    // Live validation UX:
    // - First show error on blur (when field becomes touched)
    // - After blur, keep updating message as user types
    const showError = (name) => touched[name] && errors[name]

    // Optional: tiny debounce so fast typing doesn’t flicker errors
    // (kept minimal: we already compute onChange)
    // You can remove this effect if you want even simpler code.
    React.useEffect(() => {
        const id = setTimeout(() => {}, 120)
        return () => clearTimeout(id)
    }, [values])

    const onChange = (e) => {
        const { name, value, type, checked } = e.target
        setValues((v) => ({
            ...v,
            [name]: type === "checkbox" ? checked : value,
        }))
    }

    const onBlur = (e) => {
        const { name } = e.target
        setTouched((t) => ({ ...t, [name]: true }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
        // Mark all as touched on submit to reveal any hidden errors
        setTouched({
            name: true,
            email: true,
            password: true,
            confirm: true,
        })

        if (!isValid) return

        // Submit payload
        const payload = { ...values }

        alert("Submitted!\n" + JSON.stringify(payload, null, 2))

        // Reset (optional)
        setValues({
            name: "",
            email: "",
            password: "",
            confirm: "",
        })

        setTouched({})
    }

    return (
        <div className="form-wrap">
            <h2>Signup</h2>

            <form noValidate onSubmit={onSubmit}>
                {/* Name (controlled) */}
                <div className="field">
                    <label htmlFor="name">Full name</label>
                    <input
                        id="name"
                        name="name"
                        value={values.name}
                        onChange={onChange}
                        onBlur={onBlur}
                        aria-invalid={!!showError("name")}
                        aria-describedby="name-err"
                        placeholder="Jane Doe"
                    />
                    {showError("name") && (
                        <div id="name-err" className="error">
                            {errors.name}
                        </div>
                    )}
                </div>

                {/* Email (controlled) */}
                <div className="field">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        name="email"
                        value={values.email}
                        onChange={onChange}
                        onBlur={onBlur}
                        inputMode="email"
                        aria-invalid={!!showError("email")}
                        aria-describedby="email-err"
                        placeholder="jane@example.com"
                    />
                    {showError("email") && (
                        <div id="email-err" className="error">
                            {errors.email}
                        </div>
                    )}
                </div>

                {/* Password (controlled) */}
                <div className="field">
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        value={values.password}
                        onChange={onChange}
                        onBlur={onBlur}
                        aria-invalid={!!showError("password")}
                        aria-describedby="password-err"
                        placeholder="8+ chars, mix of cases, number, special"
                    />
                    {showError("password") && (
                        <div id="password-err" className="error">
                            {errors.password}
                        </div>
                    )}
                    {/* Simple live strength hint */}
                    <PasswordHints pwd={values.password} />
                </div>

                {/* Confirm (controlled) */}
                <div className="field">
                    <label htmlFor="confirm">Confirm password</label>
                    <input
                        id="confirm"
                        name="confirm"
                        type="password"
                        value={values.confirm}
                        onChange={onChange}
                        onBlur={onBlur}
                        aria-invalid={!!showError("confirm")}
                        aria-describedby="confirm-err"
                    />
                    {showError("confirm") && (
                        <div id="confirm-err" className="error">
                            {errors.confirm}
                        </div>
                    )}
                </div>

                <div className="actions">
                    <button type="submit" disabled={!isValid}>
                        Create account
                    </button>
                </div>
            </form>
        </div>
    )
}

// Small live strength indicator (UX nicety)
function PasswordHints({ pwd }) {
    const checks = [
        { ok: pwd.length >= 8, label: "8+ chars" },
        { ok: hasUpper.test(pwd), label: "uppercase" },
        { ok: hasLower.test(pwd), label: "lowercase" },
        { ok: hasDigit.test(pwd), label: "number" },
        { ok: hasSpecial.test(pwd), label: "special" },
    ]

    const score = checks.filter((c) => c.ok).length
    const meter =
        score <= 2 ? "weak" : score === 3 ? "fair" : score === 4 ? "good" : "strong"

    return (
        <div className="pwd-hints" aria-live="polite">
            <div className={`meter meter-${meter}`}>{meter.toUpperCase()}</div>
            <ul className="hints">
                {checks.map((c) => (
                    <li key={c.label} className={c.ok ? "ok" : "bad"}>
                        {c.label}
                    </li>
                ))}
            </ul>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<FormWithValidation />)