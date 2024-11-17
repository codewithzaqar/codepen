// Function to update the preview frame
function updatePreview() {
    const htmlCode = document.getElementById('html-code').value;
    const cssCode = document.getElementById('css-code').value;
    const jsCode = document.getElementById('js-code').value;
  
    const previewFrame = document.getElementById('preview-frame');
  
    const iframeDoc = previewFrame.contentDocument || previewFrame.contentWindow.document;
  
    // Set HTML content
    iframeDoc.open();
    iframeDoc.write(htmlCode);
    iframeDoc.close();
  
    // Apply CSS styles
    const style = iframeDoc.createElement('style');
    style.textContent = cssCode;
    iframeDoc.head.appendChild(style);
  
    // Add JavaScript
    const script = iframeDoc.createElement('script');
    script.textContent = jsCode;
    iframeDoc.body.appendChild(script);
  }
  
  // Event listeners for textarea inputs to update the preview
  document.getElementById('html-code').addEventListener('input', updatePreview);
  document.getElementById('css-code').addEventListener('input', updatePreview);
  document.getElementById('js-code').addEventListener('input', updatePreview);
  
  // Initial update for any existing content in the textareas
  updatePreview();
  