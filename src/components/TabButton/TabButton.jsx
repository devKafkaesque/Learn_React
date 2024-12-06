export default function TabButton(aha, children) {
  return (
    <li>
      <button onClick={aha}>{children}</button>
    </li>
  );
}
