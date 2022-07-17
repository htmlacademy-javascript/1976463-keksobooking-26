const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const avatarChooser = document.querySelector('.ad-form__field input[type=file]');
const avatarPreview = document.querySelector('.ad-form-header__preview img');
const photoChooser = document.querySelector('.ad-form__upload input[type=file]');
const photoPreview = document.querySelector('.ad-form__photo');

avatarChooser.addEventListener('change', () => {
  const avatar = avatarChooser.files[0];
  const avatarName = avatar.name.toLowerCase();

  const matches = FILE_TYPES.some((it) =>
    avatarName.endsWith(it)
  );

  if (matches) {
    avatarPreview.src = URL.createObjectURL(avatar);
  }
});

photoChooser.addEventListener('change', () => {
  const photo = photoChooser.files[0];
  const photoName = photo.name.toLowerCase();

  const matches = FILE_TYPES.some((it) =>
    photoName.endsWith(it)
  );

  if (matches) {
    const photoContainer = document.createElement('img');
    photoPreview.appendChild(photoContainer);
    photoContainer.src = URL.createObjectURL(photo);
    photoContainer.alt = 'Фотография жилья';
    photoContainer.width = 70;
    photoContainer.height = 70;
  }
});

