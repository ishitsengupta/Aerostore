import Button from './Button';

export default function ErrorMessage({ message, onRetry }) {
  return (
    <div className="glass-panel p-8 text-center max-w-md mx-auto mt-10">
      <h3 className="text-xl font-bold text-red-400 mb-2">Oops! Something went wrong</h3>
      <p className="text-slate-500 mb-6">{message}</p>
      {onRetry && <Button variant="outline" onClick={onRetry}>Try Again</Button>}
    </div>
  );
}