const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="w-full bg-darker text-white">
            {children}
        </div>
    );
};

export default DashboardLayout;
