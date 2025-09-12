export const useAddTaskModal = (modalSelector: string, buttonSelector: string) => {
  const modal = document.querySelector<HTMLElement>(modalSelector);
  const addBtn = document.querySelector<HTMLElement>(buttonSelector);

  const openModal = () => {
    modal?.classList.remove('hidden');
    modal?.setAttribute('arial-hidden', 'false');
  }

  const closeModal = () => {
    modal?.classList.add('hidden');
    modal?.setAttribute('arial-hidden', 'true');
  }

  const Esc = (event: KeyboardEvent) => {
    if(event.key === 'Escape') {
        closeModal();
    }
  }

  const InitiliazeModal = () => {
    addBtn?.addEventListener('click', openModal);
    modal?.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal()
        }
    })
    document.addEventListener('keydown', Esc)
  };

  return InitiliazeModal;
};
