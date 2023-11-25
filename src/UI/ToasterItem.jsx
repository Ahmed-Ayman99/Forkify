import { Toaster } from 'react-hot-toast';

const ToasterItem = () => {
  return (
    <Toaster
      position="top-center"
      gutter={12}
      containerStyle={{ margin: '8px' }}
      toastOptions={{
        success: {
          duration: 3000,
        },
        error: {
          duration: 5000,
        },
        style: {
          fontSize: '16px',
          maxWidth: '500px',
          padding: '16px 24px',
          backgroundImage: 'linear-gradient(to right bottom,#fbdb89,#f48982)',
          color: 'white',
        },
      }}
    />
  );
};

export default ToasterItem;
