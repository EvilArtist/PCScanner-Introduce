// Chỉnh đường dẫn tại đây. Không cần công cụ build hoặc thư viện bên ngoài.
const downloads = {
  desktop: {
    url: 'https://apps.microsoft.com/store/detail/9NVWLB0BNMMJ?cid=DevShareMCLPCS',
    label: 'Xem bản tải Windows ↗',
    note: 'Chọn bản phát hành và tệp cài đặt phù hợp trên GitHub Releases.',
  },
  mobile: {
    // Thay bằng link opt-in nếu đang thử nghiệm nội bộ hoặc closed testing.
    url: 'https://googleplay.com/example/updatelater',
    label: 'Tham gia thử nghiệm Android ↗',
    note: 'Link tạm thời. Đường dẫn tham gia thử nghiệm chính thức sẽ được cập nhật khi sẵn sàng.',
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

