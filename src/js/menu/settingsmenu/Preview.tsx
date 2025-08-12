import { useState } from "react";
import Icons from "../../icons/Icons.tsx";
import RadioButton from "../components/RadioButton.tsx";

const PlaylistIcon = () => (
  <svg fill="currentColor" height="50%" style={{ opacity: 0.5 }} viewBox="0 0 16 16" width="50%">
    <path d="M15 14.5H5V13h10v1.5zm0-5.75H5v-1.5h10v1.5zM15 3H5V1.5h10V3zM3 3H1V1.5h2V3zm0 11.5H1V13h2v1.5zm0-5.75H1v-1.5h2v1.5z" />
  </svg>
);

const TrackIcon = () => (
  <svg fill="currentColor" height="50%" style={{ opacity: 0.5 }} viewBox="0 0 24 24" width="50%">
    <path d="M12 3v10.55A4.001 4.001 0 1 0 14 17V7h4V3h-6z" />
  </svg>
);

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__item navbar__item--left">
        <div className="navbar__item-history">
          <div className="navbar__item-history-button">
            <svg fill="currentcolor" height={16} viewBox={"0 0 24 24"} width={16}>
              <path d="M10.295 19.715a1 1 0 0 0 1.404-1.424l-5.37-5.292h13.67a1 1 0 0 0 0-2H6.336L11.7 5.714a1 1 0 0 0-1.404-1.424L3.37 11.112a1.25 1.25 0 0 0 0 1.78z" />
            </svg>
          </div>
          <div className="navbar__item-history-button">
            <svg fill="currentcolor" height={16} viewBox={"0 0 24 24"} width={16}>
              <path d="M13.705 4.284A1 1 0 1 0 12.3 5.708L17.67 11H4a1 1 0 1 0 0 2h13.665L12.3 18.285a1 1 0 0 0 1.403 1.424l6.925-6.822a1.25 1.25 0 0 0 0-1.78z" />
            </svg>
          </div>
        </div>
        <div className="navbar__item-button">
          <svg fill="currentcolor" height={16} viewBox={"0 0 76.465 68.262"} width={16}>
            <path d="M61.49 55.095a6.5 6.5 0 016.5 6.5 6.5 6.5 0 01-6.5 6.5 6.5 6.5 0 01-6.5-6.501 6.5 6.5 0 016.5-6.5Zm-38.274 0a6.5 6.5 0 016.5 6.5 6.5 6.5 0 01-6.5 6.5 6.5 6.5 0 01-6.5-6.501 6.5 6.5 0 016.5-6.5ZM17.591 10.984l4.064 20.91H61.064l6.393-20.91H17.59ZM.001 0H15.455l.872 4.485H76.242l-10.35 33.91H22.918l1.2 6.172h43.61v6.5H18.76L10.097 6.5H0V0Z" />
          </svg>
        </div>
      </div>
      <div className="navbar__item navbar__item--center">
        <div className="navbar__item-button navbar__item-button--active">
          <svg fill="currentcolor" height={16} viewBox="0 0 24 24" width={16}>
            <path d="M13.5 1.515a3 3 0 0 0-3 0L3 5.845a2 2 0 0 0-1 1.732V21a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6h4v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V7.577a2 2 0 0 0-1-1.732l-7.5-4.33z" />
          </svg>
        </div>
        <div className="navbar__item-search">
          <svg fill="currentcolor" height={16} viewBox="0 0 24 24" width={16}>
            <path d="M10.533 1.27893C5.35215 1.27893 1.12598 5.41887 1.12598 10.5579C1.12598 15.697 5.35215 19.8369 10.533 19.8369C12.767 19.8369 14.8235 19.0671 16.4402 17.7794L20.7929 22.132C21.1834 22.5226 21.8166 22.5226 22.2071 22.132C22.5976 21.7415 22.5976 21.1083 22.2071 20.7178L17.8634 16.3741C19.1616 14.7849 19.94 12.7634 19.94 10.5579C19.94 5.41887 15.7138 1.27893 10.533 1.27893ZM3.12598 10.5579C3.12598 6.55226 6.42768 3.27893 10.533 3.27893C14.6383 3.27893 17.94 6.55226 17.94 10.5579C17.94 14.5636 14.6383 17.8369 10.533 17.8369C6.42768 17.8369 3.12598 14.5636 3.12598 10.5579Z" />
          </svg>
          <div>Search</div>
        </div>
      </div>
      <div className="navbar__item navbar__item--right">
        <div className="navbar__item-button">
          <Icons.React.settings size={16} />
        </div>
        <div className="navbar__item-windows-controls">
          <div className="navbar__item-windows-controls-btn">
            <svg height="12" width="12">
              <line stroke="currentColor" strokeWidth=".9" x1="1" x2="11" y1="6" y2="6" />
            </svg>
          </div>
          <div className="navbar__item-windows-controls-btn">
            <svg fill="none" height="12" stroke="currentColor" strokeWidth=".9" width="12">
              <rect height="7" width="7" x="1.5" y="3.5" />
              <polyline points="3.5,3.5 3.5,1.5 10.5,1.5 10.5,8.5 8.5,8.5" />
            </svg>
          </div>
          <div className="navbar__item-windows-controls-btn">
            <svg height="12" width="12">
              <path d="M1,1 L11,11 M1,11 L11,1" stroke="currentColor" strokeWidth="1.1" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

const SidebarPlaylistItem = ({ name, info }) => {
  return (
    <div className="playlist-item">
      <div className="playlist-item__image">
        <PlaylistIcon />
      </div>
      <div className="playlist-item__info">
        <div className="playlist-item__name">{name}</div>
        <div className="playlist-item__description">{info}</div>
      </div>
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__header">Your Library</div>
      <div className="chips">
        <div className="chips__item chips__item--active">Playlists</div>
        <div className="chips__item">Artists</div>
        <div className="chips__item">Podcasts</div>
      </div>
      <div className="sidebar__search">
        <svg fill="currentcolor" height={10} viewBox="0 0 16 16" width={10}>
          <path d="M7 1.75a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5zM.25 7a6.75 6.75 0 1 1 12.096 4.12l3.184 3.185a.75.75 0 1 1-1.06 1.06L11.304 12.2A6.75 6.75 0 0 1 .25 7z" />
        </svg>
      </div>
      <SidebarPlaylistItem info={"Playlist.Username"} name={"Playlist 1"} />
      <SidebarPlaylistItem info={"Playlist.Username"} name={"Playlist 2"} />
      <SidebarPlaylistItem info={"Playlist.Username"} name={"Playlist 3"} />
      <SidebarPlaylistItem info={"Playlist.Spotify"} name={"Playlist 4"} />
      <SidebarPlaylistItem info={"Playlist.Spotify"} name={"Playlist 5"} />
      <SidebarPlaylistItem info={"Spotify"} name={"Spotify"} />
    </div>
  );
};

const NowPlayingBarButton = ({ path, path2 }) => {
  return (
    <div className="now-playing-bar__button">
      <svg fill="currentcolor" height={12} viewBox="0 0 16 16" width={12}>
        <path d={path} />
        <path d={path2} />
      </svg>
    </div>
  );
};

const NowPlayingBar = () => {
  return (
    <div className="now-playing-bar">
      <div className="now-playing-bar__item now-playing-bar__item--left">
        <div className="now-playing-bar__cover-art">
          <TrackIcon />
        </div>
        <div className="now-playing-bar__info">
          <div className="now-playing-bar__info-title">Track Title</div>
          <div className="now-playing-bar__info-artist">Artist Name</div>
        </div>
        <NowPlayingBarButton
          path={
            "M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm11.748-1.97a.75.75 0 0 0-1.06-1.06l-4.47 4.47-1.405-1.406a.75.75 0 1 0-1.061 1.06l2.466 2.467 5.53-5.53z"
          }
        />
      </div>
      <div className="now-playing-bar__item now-playing-bar__item--center">
        <div className="now-playing-bar__controls">
          <NowPlayingBarButton
            path={
              "M13.151.922a.75.75 0 1 0-1.06 1.06L13.109 3H11.16a3.75 3.75 0 0 0-2.873 1.34l-6.173 7.356A2.25 2.25 0 0 1 .39 12.5H0V14h.391a3.75 3.75 0 0 0 2.873-1.34l6.173-7.356a2.25 2.25 0 0 1 1.724-.804h1.947l-1.017 1.018a.75.75 0 0 0 1.06 1.06L15.98 3.75 13.15.922zM.391 3.5H0V2h.391c1.109 0 2.16.49 2.873 1.34L4.89 5.277l-.979 1.167-1.796-2.14A2.25 2.25 0 0 0 .39 3.5z"
            }
            path2={
              "m7.5 10.723.98-1.167.957 1.14a2.25 2.25 0 0 0 1.724.804h1.947l-1.017-1.018a.75.75 0 1 1 1.06-1.06l2.829 2.828-2.829 2.828a.75.75 0 1 1-1.06-1.06L13.109 13H11.16a3.75 3.75 0 0 1-2.873-1.34l-.787-.938z"
            }
          />
          <NowPlayingBarButton
            path={
              "M2.0625 15a.75.75 90 101.5 0V3a.75.75 90 10-1.5 0v12ZM15.5625 14.2898c0 1.068-1.209 1.689-2.0775 1.0665L5.6325 9.726a1.3125 1.3125 90 01.0562-2.1713l7.8525-5.037c.8738-.561 2.0212.0668 2.0212 1.1048v10.6673Z"
            }
          />
          <div className="now-playing-bar__button now-playing-bar__button--play">
            <svg fill="currentcolor" height={16} viewBox="0 0 16 16" width={16}>
              <path d="M3.3333 3.516c0-1.138 1.2173-1.8613 2.2167-1.318l8.2413 4.484c1.044.5687 1.044 2.0673 0 2.6353L5.55 13.8013C4.5507 14.3453 3.3333 13.6213 3.3333 12.484V3.516Z" />
            </svg>
          </div>
          <NowPlayingBarButton
            path={
              "M12.7 1a.7.7 0 0 0-.7.7v5.15L2.05 1.107A.7.7 0 0 0 1 1.712v12.575a.7.7 0 0 0 1.05.607L12 9.149V14.3a.7.7 0 0 0 .7.7h1.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-1.6z"
            }
          />
          <NowPlayingBarButton
            path={
              "M0 4.75A3.75 3.75 0 0 1 3.75 1h8.5A3.75 3.75 0 0 1 16 4.75v5a3.75 3.75 0 0 1-3.75 3.75H9.81l1.018 1.018a.75.75 0 1 1-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 1 1 1.06 1.06L9.811 12h2.439a2.25 2.25 0 0 0 2.25-2.25v-5a2.25 2.25 0 0 0-2.25-2.25h-8.5A2.25 2.25 0 0 0 1.5 4.75v5A2.25 2.25 0 0 0 3.75 12H5v1.5H3.75A3.75 3.75 0 0 1 0 9.75v-5z"
            }
          />
        </div>
        <div className="now-playing-bar__progress">
          <div className="now-playing-bar__progress-time">0:00</div>
          <div className="now-playing-bar__progress-bar" />
          <div className="now-playing-bar__progress-time">3:30</div>
        </div>
      </div>
      <div className="now-playing-bar__item now-playing-bar__item--right">
        <NowPlayingBarButton
          path={
            "M15 15H1v-1.5h14zm0-4.5H1V9h14zm-14-7A2.5 2.5 0 0 1 3.5 1h9a2.5 2.5 0 0 1 0 5h-9A2.5 2.5 0 0 1 1 3.5m2.5-1a1 1 0 0 0 0 2h9a1 1 0 1 0 0-2z"
          }
        />
        <div className="now-playing-bar__volume">
          <svg fill="currentcolor" height={12} viewBox="0 0 16 16" width={12}>
            <path d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 6.087a4.502 4.502 0 0 0 0-8.474v1.65a2.999 2.999 0 0 1 0 5.175v1.649z" />
          </svg>
          <div className="now-playing-bar__volume-bar" />
        </div>
        <NowPlayingBarButton
          path={
            "M0.25 3C0.25 2.0335 1.0335 1.25 2 1.25H5.375V2.75H2C1.86193 2.75 1.75 2.86193 1.75 3V5.42857H0.25V3ZM14 2.75H10.625V1.25H14C14.9665 1.25 15.75 2.0335 15.75 3V5.42857H14.25V3C14.25 2.86193 14.1381 2.75 14 2.75ZM1.75 10.5714V13C1.75 13.1381 1.86193 13.25 2 13.25H5.375V14.75H2C1.0335 14.75 0.25 13.9665 0.25 13V10.5714H1.75ZM14.25 13V10.5714H15.75V13C15.75 13.9665 14.9665 14.75 14 14.75H10.625V13.25H14C14.1381 13.25 14.25 13.1381 14.25 13Z"
          }
        />
      </div>
    </div>
  );
};

const MainHomeShortcutItem = ({ name }) => {
  return (
    <div className="shortcut-item">
      <div className="shortcut-item__image">
        <PlaylistIcon />
      </div>
      <div className="shortcut-item__text">{name}</div>
    </div>
  );
};

const MainHomeCarouselItem = ({ name }) => {
  return (
    <div className="carousel-item">
      <div className="carousel-item__image">
        <TrackIcon />
      </div>
      <div className="carousel-item__text">{name}</div>
    </div>
  );
};

const MainHome = () => {
  return (
    <div className="main-view main-home">
      <div className="main-home__background" />
      <div className="chips">
        <div className="chips__item chips__item--active">Home</div>
        <div className="chips__item">Music</div>
        <div className="chips__item">Podcasts</div>
        <div className="chips__item">Audiobooks</div>
      </div>
      <div className="main-home__shortcuts">
        <MainHomeShortcutItem name={"Playlist 1"} />
        <MainHomeShortcutItem name={"Playlist 2"} />
        <MainHomeShortcutItem name={"Playlist 3"} />
        <MainHomeShortcutItem name={"Playlist 4"} />
        <MainHomeShortcutItem name={"Playlist 5"} />
        <MainHomeShortcutItem name={"Playlist 6"} />
      </div>
      <div className="main-home__header">Made for you</div>
      <div className="main-home__carousel">
        <MainHomeCarouselItem name={"Daily Mix 1"} />
        <MainHomeCarouselItem name={"Discover Weekly"} />
        <MainHomeCarouselItem name={"Release Radar"} />
        <MainHomeCarouselItem name={"On Repeat"} />
        <MainHomeCarouselItem name={"Repeat Rewind"} />
        <MainHomeCarouselItem name={"Create a Blend"} />
      </div>
      <div className="main-home__header">Recently Played</div>
      <div className="main-home__carousel">
        <MainHomeCarouselItem name={"Playlist 1"} />
        <MainHomeCarouselItem name={"Playlist 2"} />
        <MainHomeCarouselItem name={"Playlist 3"} />
        <MainHomeCarouselItem name={"Playlist 4"} />
        <MainHomeCarouselItem name={"Playlist 5"} />
        <MainHomeCarouselItem name={"Playlist 6"} />
      </div>
      <div className="main-home__header">Jump back in</div>
      <div className="main-home__carousel">
        <MainHomeCarouselItem name={"Playlist 1"} />
        <MainHomeCarouselItem name={"Playlist 2"} />
        <MainHomeCarouselItem name={"Playlist 3"} />
        <MainHomeCarouselItem name={"Playlist 4"} />
        <MainHomeCarouselItem name={"Playlist 5"} />
        <MainHomeCarouselItem name={"Playlist 6"} />
      </div>
      <div className="main-home__header">Jump back in</div>
      <div className="main-home__carousel">
        <MainHomeCarouselItem name={"Playlist 1"} />
        <MainHomeCarouselItem name={"Playlist 2"} />
        <MainHomeCarouselItem name={"Playlist 3"} />
        <MainHomeCarouselItem name={"Playlist 4"} />
        <MainHomeCarouselItem name={"Playlist 5"} />
        <MainHomeCarouselItem name={"Playlist 6"} />
      </div>
    </div>
  );
};

const PlaylistTrack = ({ num, title, artist, album, time }) => {
  return (
    <div className="playlist-track">
      <div className="playlist-track__number">{num}</div>
      <div className="playlist-track__info">
        <div className="playlist-track__image">
          <TrackIcon />
        </div>
        <div className="playlist-track__details">
          <div className="playlist-track__title">{title}</div>
          <div className="playlist-track__artist">{artist}</div>
        </div>
      </div>
      <div className="playlist-track__album">{album}</div>
      <div className="playlist-track__time">{time}</div>
    </div>
  );
};

const MainPlaylist = () => {
  return (
    <div className="main-view main-playlist">
      <div className="main-playlist__background" />
      <div className="main-playlist__header">
        <div className="main-playlist__image">
          <PlaylistIcon />
        </div>
        <div className="main-playlist__info">
          <div className="main-playlist__type">Playlist</div>
          <div className="main-playlist__title">My Playlist</div>
          <div className="main-playlist__owner">Username</div>
          <div className="main-playlist__stats">50 songs, 3 hr 20 min</div>
        </div>
      </div>
      <div className="main-playlist__controls">
        <div className="main-playlist__play-button">
          <svg fill="currentcolor" height={16} viewBox="0 0 24 24" width={16}>
            <path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z" />
          </svg>
        </div>
        <div className="main-playlist__like-button">
          <Icons.React.settings size={12} /> {/* Heart Icon */}
        </div>
        <div className="main-playlist__more-button">
          <Icons.React.settings size={12} /> {/* Three dots icon */}
        </div>
      </div>
      <div className="main-playlist__tracklist">
        <div className="playlist-track playlist-track--header">
          <div className="playlist-track__number">#</div>
          <div className="playlist-track__info">Title</div>
          <div className="playlist-track__album">Album</div>
          <div className="playlist-track__time">
            <svg fill="currentcolor" height={12} viewBox="0 0 16 16" width={12}>
              <path d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z" />
              <path d="M8 3.25a.75.75 0 01.75.75v3.25H11a.75.75 0 010 1.5H7.25V4A.75.75 0 018 3.25z" />
            </svg>
          </div>
        </div>
        <PlaylistTrack album="Album 1" artist="Artist 1" num={1} time="3:45" title="Track 1" />
        <PlaylistTrack album="Album 1" artist="Artist 1" num={2} time="4:10" title="Track 2" />
        <PlaylistTrack album="Album 2" artist="Artist 2" num={3} time="2:59" title="Track 3" />
        <PlaylistTrack album="Album 2" artist="Artist 2" num={4} time="5:02" title="Track 4" />
        <PlaylistTrack album="Album 3" artist="Artist 3" num={5} time="3:15" title="Track 5" />
        <PlaylistTrack album="Album 3" artist="Artist 3" num={6} time="4:20" title="Track 6" />
        <PlaylistTrack album="Album 3" artist="Artist 3" num={7} time="2:45" title="Track 7" />
        <PlaylistTrack album="Album 4" artist="Artist 4" num={8} time="3:30" title="Track 8" />
        <PlaylistTrack album="Album 5" artist="Artist 5" num={9} time="3:15" title="Track 9" />
        <PlaylistTrack album="Album 6" artist="Artist 6" num={10} time="3:15" title="Track 10" />
        <PlaylistTrack album="Album 6" artist="Artist 6" num={11} time="2:45" title="Track 11" />
        <PlaylistTrack album="Album 7" artist="Artist 7" num={12} time="3:30" title="Track 12" />
      </div>
    </div>
  );
};

const Preview = ({ settings }) => {
  const [selectedRadio, setSelectedRadio] = useState("home");

  console.log("Settings:", settings);

  const dataParts = [];

  for (const key in settings) {
    if (
      key === "colour-scheme" ||
      key === "spotify-font" ||
      key === "spotify-mode" ||
      key === "volume-percentage" ||
      key === "test-toggle" ||
      key === "test-incompatible-toggle" ||
      key === "test-incompatible-input" ||
      key === "test-incompatible-dropdown" ||
      key === "test-input" ||
      key === "test-dropdown" ||
      key === "test-reveal" ||
      key === "revealed-toggle" ||
      key === "revealed-input" ||
      key === "revealed-dropdown" ||
      key === "test-radiobutton"
    )
      continue;
    const value = settings[key];

    if (typeof value === "boolean" && value) {
      dataParts.push(key);
    } else if (value !== null && value !== undefined && typeof value !== "boolean") {
      dataParts.push(`${key}-${value}`);
    }
  }

  const dataString = dataParts.join(" ");

  const colourScheme = settings["colour-scheme"];
  const spotifyFont = settings["spotify-font"];

  return (
    <>
      <div className="preview__header">
        <h2>Preview</h2>
        <RadioButton
          name="debugRadio"
          onChange={setSelectedRadio}
          options={[
            { label: "Home", value: "home" },
            { label: "Playlist", value: "playlist" },
          ]}
          selected={selectedRadio}
        />
      </div>
      <div
        className="preview__spotify-app"
        colour-scheme={colourScheme}
        data={dataString.trim()}
        style={{ "--preview-font-family": spotifyFont }}
      >
        <Navbar />
        <Sidebar />
        {selectedRadio === "playlist" ? <MainPlaylist /> : <MainHome />}
        <NowPlayingBar />
      </div>
    </>
  );
};

export default Preview;
