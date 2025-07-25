import Icons from "../../icons/Icons";

const Navbar = () => {
  return (
    <div className="preview-navbar">
      <div className="preview-navbar__item preview-navbar__item--left">
        <div className="preview-navbar__item-history" />
        <div className="preview-navbar__item-button">
          <Icons.React.settings size={16} />
        </div>
        <div className="preview-navbar__item-button">
          <Icons.React.settings size={16} />
        </div>
      </div>
      <div className="preview-navbar__item preview-navbar__item--center">
        <div className="preview-navbar__item-search">
          <Icons.React.settings size={16} />
          <div>Search</div>
        </div>
      </div>
      <div className="preview-navbar__item preview-navbar__item--right">
        <div className="preview-navbar__item-button">
          <Icons.React.settings size={16} />
        </div>
        <div className="preview-navbar__item-windows-controls" />
      </div>
    </div>
  );
};

const PlaylistItem = ({ name, info }) => {
  return (
    <div className="playlist-item">
      <div className="playlist-item__image" />
      <div className="playlist-item__info">
        <div className="playlist-item__name">{name}</div>
        <div className="playlist-item__description">{info}</div>
      </div>
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="preview-sidebar">
      <div className="preview-sidebar__header">Your Library</div>
      <div className="chips">
        <div className="chips__item chips__item--active">Playlists</div>
        <div className="chips__item">Artists</div>
        <div className="chips__item">Podcasts</div>
      </div>
      <div className="preview-sidebar__search">
        <Icons.React.settings size={10} /> {/* search Icon */}
      </div>

      <PlaylistItem name={"Playlist 1"} info={"Playlist.Username"} />
      <PlaylistItem name={"Playlist 2"} info={"Playlist.Username"} />
      <PlaylistItem name={"Playlist 3"} info={"Playlist.Username"} />
      <PlaylistItem name={"Playlist 4"} info={"Playlist.Spotify"} />
      <PlaylistItem name={"Playlist 5"} info={"Playlist.Spotify"} />
      <PlaylistItem name={"Spotify"} info={"Spotify"} />
    </div>
  );
};

const MainViewShortcutItem = ({ name }) => {
  return (
    <div className="shortcut-item">
      <div className="shortcut-item__image" />
      <div className="shortcut-item__text">{name}</div>
    </div>
  );
};

const MainViewCarouselItem = ({ name }) => {
  return (
    <div className="carousel-item">
      <div className="carousel-item__image" />
      <div className="carousel-item__text">{name}</div>
    </div>
  );
};

const MainView = () => {
  return (
    <div className="preview-main-view">
      <div className="preview-main-view__background" />
      <div className="chips">
        <div className="chips__item chips__item--active">Home</div>
        <div className="chips__item">Music</div>
        <div className="chips__item">Podcasts</div>
        <div className="chips__item">Audiobooks</div>
      </div>
      <div className="preview-main-view__shortcuts">
        <MainViewShortcutItem name={"Playlist 1"} />
        <MainViewShortcutItem name={"Playlist 2"} />
        <MainViewShortcutItem name={"Playlist 3"} />
        <MainViewShortcutItem name={"Playlist 4"} />
        <MainViewShortcutItem name={"Playlist 5"} />
        <MainViewShortcutItem name={"Playlist 6"} />
      </div>
      <div className="preview-main-view__header">Made for you</div>
      <div className="preview-main-view__carousel">
        <MainViewCarouselItem name={"Daily Mix 1"} />
        <MainViewCarouselItem name={"Discover Weekly"} />
        <MainViewCarouselItem name={"Release Radar"} />
        <MainViewCarouselItem name={"On Repeat"} />
        <MainViewCarouselItem name={"Repeat Rewind"} />
        <MainViewCarouselItem name={"Create a Blend"} />
      </div>
      <div className="preview-main-view__header">Recently Played</div>
      <div className="preview-main-view__carousel">
        <MainViewCarouselItem name={"Playlist 1"} />
        <MainViewCarouselItem name={"Playlist 2"} />
        <MainViewCarouselItem name={"Playlist 3"} />
        <MainViewCarouselItem name={"Playlist 4"} />
        <MainViewCarouselItem name={"Playlist 5"} />
        <MainViewCarouselItem name={"Playlist 6"} />
      </div>
      <div className="preview-main-view__header">Jump back in</div>
      <div className="preview-main-view__carousel">
        <MainViewCarouselItem name={"Playlist 1"} />
        <MainViewCarouselItem name={"Playlist 2"} />
        <MainViewCarouselItem name={"Playlist 3"} />
        <MainViewCarouselItem name={"Playlist 4"} />
        <MainViewCarouselItem name={"Playlist 5"} />
        <MainViewCarouselItem name={"Playlist 6"} />
      </div>
    </div>
  );
};

const NowPlayingBar = () => {
  return (
    <>
      <div className="preview-now-playing-bar">
        <div className="preview-now-playing-bar__item preview-now-playing-bar__item--left">
          <div className="preview-now-playing-bar__cover-art" />
          <div className="preview-now-playing-bar__info">
            <div className="preview-now-playing-bar__info-title">Song Title</div>
            <div className="preview-now-playing-bar__info-artist">Artist Name</div>
          </div>
          <div className="preview-now-playing-bar__button">
            <Icons.React.settings size={12} /> {/* Heart Icon */}
          </div>
        </div>
        <div className="preview-now-playing-bar__item preview-now-playing-bar__item--center">
          <div className="preview-now-playing-bar__controls">
            <div className="preview-now-playing-bar__button">
              <Icons.React.settings size={12} /> {/* Shuffle Icon */}
            </div>
            <div className="preview-now-playing-bar__button">
              <Icons.React.settings size={12} /> {/* Previous Icon */}
            </div>
            <div className="preview-now-playing-bar__button preview-now-playing-bar__button--play">
              <Icons.React.settings size={16} /> {/* Play/Pause Icon */}
            </div>
            <div className="preview-now-playing-bar__button">
              <Icons.React.settings size={12} /> {/* Next Icon */}
            </div>
            <div className="preview-now-playing-bar__button">
              <Icons.React.settings size={12} /> {/* Repeat Icon */}
            </div>
          </div>
          <div className="preview-now-playing-bar__progress">
            <div className="preview-now-playing-bar__progress-time">0:00</div>
            <div className="preview-now-playing-bar__progress-bar" />
            <div className="preview-now-playing-bar__progress-time">3:30</div>
          </div>
        </div>
        <div className="preview-now-playing-bar__item preview-now-playing-bar__item--right">
          <div className="preview-now-playing-bar__button">
            <Icons.React.settings size={12} /> {/* Queue Icon */}
          </div>
          <div className="preview-now-playing-bar__volume">
            <Icons.React.settings size={12} /> {/* Volume Icon */}
            <div className="preview-now-playing-bar__volume-bar" />
          </div>
          <div className="preview-now-playing-bar__button">
            <Icons.React.settings size={12} /> {/* Fullscreen Icon */}
          </div>
        </div>
      </div>
    </>
  );
};

const Preview = () => {
  return (
    <>
      <h2 className="preview-title">Preview</h2>
      <div className="preview-spotify-app">
        <Navbar />
        <Sidebar />
        <MainView />
        <NowPlayingBar />
      </div>
    </>
  );
};

export default Preview;
