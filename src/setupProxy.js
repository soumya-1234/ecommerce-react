const { createProxyMiddleware } = require("http-proxy-middleware")

module.exports=app=>{
    app.use(
        createProxyMiddleware('/api/v1/products',{
            target: 'http://localhost:3000',
            secure: false,
            changeOrigin: true
        })
    );
};