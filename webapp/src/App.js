import longVideo from './videos/long-video.mp4';
import longVideoFaststart from './videos/faststart.mp4';

// check in Network how it loading: without `faststart` - makes 3 requests. Faststart - 1.
function App() {
  return (
    <div>
      <div>
        <h1>Without faststart</h1>
        <video controls muted={false} style={{ width: 500 }}>
          <source src={longVideo} type="video/mp4" />
        </video>
      </div>
      <div>
        <h1>Faststart</h1>
        <video controls muted={false} style={{ width: 500 }}>
          <source src={longVideoFaststart} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default App;
