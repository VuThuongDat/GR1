import Welcome from './components/Welcome';
import User from './components/User';
import Counter from './Counter';

function App() {
  return (
    <div>
      <Welcome />
      <User name="Đạt" age={21} />
      <User name="Lan" age={20} />
      <h1>Ứng dụng đếm</h1>
      <Counter />
    </div>
  );
}
