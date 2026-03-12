export default function InputField({ label, value, onChange, type = "text" }) {
  return (
    <div style={{ margin: "0.5rem 0" }}>
      <label>
        {label}
        <input
          type={type}
          value={value}
          onChange={onChange}
          style={{ marginLeft: "0.5rem" }}
        />
      </label>
    </div>
  );
}
