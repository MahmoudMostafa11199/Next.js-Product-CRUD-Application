function ErrorMessage({ error }) {
  return <p className="text-red-600 font-medium">{error.message}</p>;
}

export default ErrorMessage;
