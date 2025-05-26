<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>文件列表</title>
    <style>
        body { max-width: 800px; margin: 20px auto; padding: 20px; }
        .file-list { list-style: none; padding: 0; }
        .file-item { 
            padding: 10px; 
            margin: 5px 0;
            background: #f5f5f5;
            border-radius: 4px;
            cursor: pointer;
            transition: background 0.3s;
        }
        .file-item:hover { background: #e0e0e0; }
        .dir { color: #2196F3; }
        .success { position: fixed; top: 20px; right: 20px; padding: 10px; background: #4CAF50; color: white; }
    </style>
</head>
<body>
    <h1>服务器文件列表</h1>
    <ul class="file-list">
        <?php
        // 获取网站根目录路径
        $rootPath = $_SERVER['DOCUMENT_ROOT'];
        // 扫描目录内容
        $files = scandir($rootPath);
        
        foreach ($files as $file) {
            // 跳过特殊目录
            if ($file === '.' || $file === '..') continue;
            
            $fullPath = $rootPath . '/' . $file;
            $isDir = is_dir($fullPath);
            $fileUrl = rawurlencode($file);
            
            echo '<li class="file-item' . ($isDir ? ' dir' : '') . '" 
                     data-url="' . htmlspecialchars($fileUrl) . '">'
                . htmlspecialchars($file) 
                . ($isDir ? ' <em>(目录)</em>' : '')
                . '</li>';
        }
        ?>
    </ul>
    <div class="success" id="copySuccess" style="display: none;">已复制URL!</div>

    <script>
    document.querySelectorAll('.file-item').forEach(item => {
        item.addEventListener('click', async () => {
            const fullUrl = `${window.location.origin}/${item.dataset.url}`;
            
            try {
                await navigator.clipboard.writeText(fullUrl);
                showCopySuccess();
            } catch (err) {
                prompt('复制失败，请手动复制:', fullUrl);
            }
        });
    });

    function showCopySuccess() {
        const notice = document.getElementById('copySuccess');
        notice.style.display = 'block';
        setTimeout(() => notice.style.display = 'none', 2000);
    }
    </script>
</body>
</html>