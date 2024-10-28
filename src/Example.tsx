export function Example({ msg }: { msg?: string }) {
	return (
		<div className="font-bold border rounded-lg p-4">
			Example
			{msg && `: ${msg}`}
		</div>
	);
}
