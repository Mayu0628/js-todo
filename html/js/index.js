const taskValue = document.getElementsByClassName('task_value')[0];
const taskSubmit = document.getElementsByClassName('task_submit')[0];
const taskList = document.getElementsByClassName('task_list')[0];
// 変数 変数名 = オブジェクト.メソッド（リファレンス）('class名')[最初の要素];

// 追加ボタンを作成
const addTasks = (task) => {
  // 入力したタスクを追加・表示
  const listItem = document.createElement('li');
  // 新しい ('div,liなど') 要素を作成します
  const showItem = taskList.appendChild(listItem);
  //   既存の親要素(今回はtaskList)の中に子要素を追加する
  showItem.innerHTML = task;
  

  // タスクに削除ボタンを付与
  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = 'Delete';
  listItem.appendChild(deleteButton);

  // 削除ボタンをクリックし、イベントを発動（タスクが削除）
  deleteButton.addEventListener('click', evt => {
    evt.preventDefault();
    deleteTasks(deleteButton);
  });
};

// 削除ボタンにタスクを消す機能を付与
const deleteTasks = (deleteButton) => {
  const chosenTask = deleteButton.closest('li');
  taskList.removeChild(chosenTask);
};

// 追加ボタンをクリックし、イベントを発動（タスクが追加）
taskSubmit.addEventListener('click', evt => {
  evt.preventDefault();
  const task = taskValue.value;
  addTasks(task);
  taskValue.value = '';
});
