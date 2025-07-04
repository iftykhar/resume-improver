<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *'); // For local development
header('Access-Control-Allow-Methods: POST');

$data = json_decode(file_get_contents('php://input'), true);
$resume = $data['resume'] ?? '';

if (!$resume) {
    echo json_encode(['error' => 'No resume provided.']);
    exit;
}

// Use OpenAI API (example)
$apiKey = 'your-openai-api-key';
$payload = [
    'model' => 'gpt-3.5-turbo',
    'messages' => [
        ['role' => 'system', 'content' => 'You are an expert resume reviewer.'],
        ['role' => 'user', 'content' => "Improve this resume:\n\n$resume"]
    ]
];

$ch = curl_init('https://api.openai.com/v1/chat/completions');
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HTTPHEADER => [
        'Content-Type: application/json',
        "Authorization: Bearer $apiKey"
    ],
    CURLOPT_POSTFIELDS => json_encode($payload)
]);

$response = curl_exec($ch);
curl_close($ch);

echo $response;
