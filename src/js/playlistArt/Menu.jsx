import React from "react";

const Menu = () => {
  const [playlist, setPlaylist] = React.useState({
    title: "Loading...",
    description: "Loading...",
    images: "https://via.placeholder.com/500",
    id: null,
  });

  React.useEffect(() => {
    (async () => {
      const id = Spicetify.Platform.History.location.pathname.split("/")[2];
      const details = await Spicetify.Platform.PlaylistAPI.getMetadata(`spotify:playlist:${id}`);

      setPlaylist({
        id,
        title: details?.name || "Loading...",
        description: details?.description || "Loading...",
        images: details?.images?.[0]?.url || "https://via.placeholder.com/500",
      });
    })();
  }, []);

  const saveChanges = async () => {
    if (!playlist.title.trim()) {
      Spicetify.showNotification("Can't set empty playlist name!");
      return;
    }
    const playlistUri = `spotify:playlist:${playlist.id}`;

    await Spicetify.Platform.PlaylistAPI.updateDetails(playlistUri, {
      name: playlist.title,
      description: playlist.description,
      // imageUploadToken: playlist.image || null, do this later
    });

    //todo do the image thing
    Spicetify.PopupModal.remove();
  };

  return (
    <div className="playlist-modal">
      <div className="image-button">
        <img src={playlist.images} className="image" />
      </div>
      <div className="title-container">
        <input
          type="text"
          name="title"
          value={playlist.title}
          onChange={(e) => setPlaylist({ ...playlist, title: e.target.value })}
          placeholder="Add a name"
          className="title-input"
        />
      </div>
      <div className="description-container">
        <textarea
          name="description"
          value={playlist.description}
          onChange={(e) => setPlaylist({ ...playlist, description: e.target.value })}
          placeholder="Add an optional description"
          className="description-input"
        />
      </div>
      <div className="disclaimer-text">
        By proceeding, you agree to give Spotify access to the image you choose to upload. Please
        make sure you have the right to upload the image.
      </div>
      <button className="playlistSaveButton encore-inverted-light-set" onClick={saveChanges}>
        Save
      </button>
    </div>
  );
};

export default Menu;
