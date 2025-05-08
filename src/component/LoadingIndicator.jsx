import { useEffect, useState } from "react";
import { Text, View } from "react-native";

const LoadingIndicator = () => {
    const [dotCount, setDotCount] = useState(1);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setDotCount((prev) => (prev < 3 ? prev + 1 : 1));
      }, 500);
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <View style={styles.botMsg}>
        <Text style={styles.text}>Typing{'.'.repeat(dotCount)}</Text>
      </View>
    );
  };
  

  export default LoadingIndicator;