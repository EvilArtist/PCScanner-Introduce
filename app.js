// Chỉnh đường dẫn tại đây. Không cần công cụ build hoặc thư viện bên ngoài.
const downloads = {
  desktop: {
    url: 'https://apps.microsoft.com/detail/9NVWLB0BNMMJ?hl=en-us&gl=VN&ocid=pdpshare',
    label: 'Tải trên Microsoft Store ↗',
    note: 'Mở Microsoft Store để cài PCScanner trên máy tính Windows.',
  },
  mobile: {

    url: 'https://play.google.com/store/apps/details?id=com.nguyenxuanloc.pcscanner',
    label: 'Tải trên Google Play ↗',
    note: 'Mở Google Play để cài PCScanner trên điện thoại Android.',
  },
};

Object.entries(downloads).forEach(([platform, config]) => {
  const link = document.getElementById(`${platform}-download`);
  const note = document.getElementById(`${platform}-note`);
  if (!config.url) {
    link.removeAttribute('href');
    link.setAttribute('aria-disabled', 'true');
    link.textContent = config.label;
    note.textContent = config.note;
    return;
  }
  const url = new URL(config.url);
  if (url.protocol !== 'https:') return;
  link.href = url.href;
  link.textContent = config.label;
  note.textContent = config.note;
});
document.getElementById('year').textContent = new Date().getFullYear();

