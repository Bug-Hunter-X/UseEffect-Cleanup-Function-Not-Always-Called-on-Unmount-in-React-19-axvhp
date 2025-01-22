```javascript
import { useRef } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const cleanupRef = useRef(null);

  useEffect(() => {
    console.log('Component mounted');
    cleanupRef.current = () => {
      console.log('Component unmounted');
    };
    return cleanupRef.current;
  }, []);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```