$files = @(
  'components/tools/brightness-test-intro.tsx',
  'components/tools/contrast-test-intro.tsx',
  'components/tools/dead-pixel-intro.tsx'
)

foreach ($file in $files) {
  Write-Host "Processing: $file"
  
  $content = Get-Content -Path $file -Raw
  
  # Remove isEn variable declaration (whole line)
  $content = $content -replace "  const isEn = locale === 'en';`r`n", ""
  
  # Remove all isEn ternary operators
  # Pattern: {isEn ? 'english' : 'french'} -> {'english'}
  # Handles single quotes, double quotes, template literals
  $content = $content -replace "\{isEn\s*\?\s*'([^']*)'\s*:\s*'[^']*'\}", "{`"$1`"}"
  $content = $content -replace '\{isEn\s*\?\s*"([^"]*)"\s*:\s*"[^"]*"\}', '{"`$1`"}'
  
  # Handle multiline ternaries (with line breaks in the middle)
  # This is trickier - use DOTALL mode by replacing line by line
  $lines = $content -split "`n"
  $output = @()
  $i = 0
  while ($i -lt $lines.Length) {
    $line = $lines[$i]
    
    # Check if line contains isEn ? pattern
    if ($line -match '\{isEn\s*\?') {
      # This is a multiline ternary, need to accumulate lines until we find the closing brace
      $accumulated = $line
      $i++
      $depth = 0
      
      # Count braces to find the end
      foreach ($char in $line.ToCharArray()) {
        if ($char -eq '{') { $depth++ }
        if ($char -eq '}') { $depth-- }
      }
      
      while ($depth -gt 0 -and $i -lt $lines.Length) {
        $accumulated += "`n" + $lines[$i]
        foreach ($char in $lines[$i].ToCharArray()) {
          if ($char -eq '{') { $depth++ }
          if ($char -eq '}') { $depth-- }
        }
        $i++
      }
      
      # Now process the accumulated multiline ternary
      # Extract just the english part
      if ($accumulated -match "\{isEn\s*\?\s*[`"'](.+?)[`"']\s*:\s*[`"'][^`"']*[`"']\}") {
        $englishPart = $matches[1]
        $accumulated = $accumulated -replace "\{isEn\s*\?\s*[`"'][^`"']*[`"']\s*:\s*[`"'][^`"']*[`"']\}", "{`"$englishPart`"}"
      }
      
      $output += $accumulated
    } else {
      $output += $line
      $i++
    }
  }
  
  $content = $output -join "`n"
  
  # Set-Content to write file
  Set-Content -Path $file -Value $content -NoNewline
  Write-Host "✓ Cleaned: $file"
}

Write-Host "Done!"
