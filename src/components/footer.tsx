export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-f border-t border-border/40 px-4 py-6">
      <div className="container mx-auto flex items-center justify-center text-center text-sm text-muted-foreground">
        <p>© {currentYear} | Desenvolvido por Vinícius Bastazin Araújo</p>
      </div>
    </footer>
  );
};
